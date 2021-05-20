import ShowResult from './show-result';

function ShowHex (props) {
    return (
        <section>
            <h1 style={{ fontSize: '1.5rem' }}>Hex Color Code:</h1>
            <section className="show-result" style={{ color: '#ce9178' }}>{props.styleExample}</section>
            <ShowResult styleExample={`rgb(${props.red},
        ${props.green}, ${props.blue})`} />
        </section>
    );
}

export default ShowHex;