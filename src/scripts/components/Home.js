import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
        let pageLinks = [];
        let postLinks = [];
        let allData = DataStore.getAll();

        for (var page of allData.pages) {
            console.log(page.title.rendered);
            pageLinks.push(<div key={page.id}>{page.title.rendered}</div>);
        }

        for (var post of allData.posts) {
            console.log(post.title.rendered);
            postLinks.push(<div key={post.id}>{post.title.rendered}</div>);
        }

        console.log(allData);

        return (
            <div>
                <h2>{pageLinks}</h2>
                <h2>{postLinks}</h2>
            </div>
        );
    }
}

export default Home;