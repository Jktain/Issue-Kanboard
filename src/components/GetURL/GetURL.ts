import { Issues, Kanboard } from '../../data/Models';

export const getData = (URL: string): Kanboard[] => {

    let issueList: Kanboard[] = [
        {
            id: "1",
            tasks: []
        },
        {
            id: "2",
            tasks: []
        },
        {
            id: "3",
            tasks: []
        }
    ];

    let repoStars: number;

    const getIssuesFromAPI = (): Promise<Issues[]> => {
        return fetch(`https://api.github.com/repos${URL.slice(18)}/issues`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const objMass: Issues[] = data.map((item: any) => {
                    const obj: Issues = {
                        id: item.id.toString(),
                        state: item.state,
                        title: item.title,
                        number: item.number,
                        updated_at: item.updated_at,
                        assignee_login: item.assignee,
                        comments: item.comments
                    };
                    return obj;
                });
                return objMass;
            });
    }

    const getUrl = async () => {
        console.log(URL);

        try {
            const response = await fetch(`https://api.github.com/repos${URL.slice(18)}`);
            const data = await response.json();
            repoStars = data.stargazers_count;
            console.log(repoStars);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }

        try {
            const data = await getIssuesFromAPI();
            data.slice(0, 5).forEach((item, index) => {
                if (item.assignee_login == null) {
                    item.assignee_login = 'No assignee';
                } else
                    if (item.assignee_login.length > 10) item.assignee_login = `${item.assignee_login.slice(0, 8)}...`;

                item.title = `${item.title.slice(0, 26)}...`;

                const date = new Date(item.updated_at);
                const today = new Date();
                const timeDiff = Math.abs(today.getTime() - date.getTime());
                const diffDays = timeDiff / (1000 * 3600 * 24);

                if (diffDays > 1) item.updated_at = ` Opened ${Math.ceil(diffDays)} days ago`; else
                    if (diffDays === 1) item.updated_at = ` Opened ${Math.ceil(diffDays)} day ago`; else
                        if (diffDays * 24 > 1) item.updated_at = ` Opened ${Math.ceil(diffDays * 24)} hours ago`; else
                            if (diffDays * 24 === 1) item.updated_at = ` Opened ${Math.ceil(diffDays * 24)} hours ago`; else
                                if (diffDays * 24 * 60 > 1) item.updated_at = ` Opened ${Math.ceil(diffDays * 24 * 60)} minutes ago`; else
                                    if (diffDays * 24 * 60 === 1) item.updated_at = ` Opened ${Math.ceil(diffDays * 24 * 60)} minute ago`;

                if (item.assignee_login === 'No assignee') {
                    issueList[0].tasks.push(item);
                } else if (item.state === 'open') {
                    issueList[1].tasks.push(item);
                } else if (item.state === 'close') {
                    issueList[2].tasks.push(item);
                }
            })
            console.log(issueList);
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    getUrl();
    return issueList;
}