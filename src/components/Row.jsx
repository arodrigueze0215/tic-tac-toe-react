import Column from "./Column";
const Row = (props) => {
    const { onClickPlay, rowData } = props;
    const fillColumns = rowData.map(column => 
        <Column onClickPlay={onClickPlay} 
            columnData={column} 
            {...props}
        />
    )
    return <div className="Row">
        {fillColumns}
    </div>
}
export default Row;