export const convertirColumna=(array)=>{
    const dynamicColumns = array.map(col => {
        return <Column key={col.field} field={col.field} header={col.header} />;
    });
}