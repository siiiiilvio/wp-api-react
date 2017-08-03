import DataStore from 'flux/stores/DataStore.js'

class ACF extends React.Component {
    render() {
        let page = DataStore.getPageBySlug('about');
        let acf = page.acf; // Advanced Custom Fields data
        return (
            <div>
                <h1>{acf.yourCustomFieldName}</h1>
            </div>
        );
    }
}

export default ACF;