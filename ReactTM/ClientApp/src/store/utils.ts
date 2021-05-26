export function DateToStr(date: Date) {
    const year = date.getFullYear().toString();
    let month = date.getMonth().toString();
    let day = date.getDate().toString();

    month = month.length < 2 ? '0' + month : month;
    day = day.length < 2 ? '0' + day : day;

    const res = `${year}-${month}-${day}`;
    console.log(res);
    return res;
}