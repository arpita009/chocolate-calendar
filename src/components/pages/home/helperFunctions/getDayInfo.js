const monthDateMap=[{0:31},{1:28},{2:31},{3:30},{4:31},{5:30},{6:31},{7:31},{8:30},{9:31},{10:30},{11:31}];
const isALeapYear= (year) =>((year % 100 === 0) ? (year % 400 === 0): (year % 4 === 0));

function getDayInfo(year,month){
    if( year===0){
        return 0;
    }
    if (isALeapYear(year) && month===2){
        return 29;
    }
    const result= monthDateMap.find((eachMonth,idx)=>(idx)===month);
    return result[Number(month)];
};
export default getDayInfo;
