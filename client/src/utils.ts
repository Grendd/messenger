type DateOption = "time" | "fullYear" | "fullTime"

export const currentDate = (date: DateOption) => {
    const currDate = new Date();

    switch(date) {
        case "fullYear":
            return currDate.getFullYear();
        case "time":
            return `${currDate.getHours()}:${currDate.getMinutes() < 10 ? "0" + currDate.getMinutes() : currDate.getMinutes()}`;
        case "fullTime":
            return `${currDate.getHours()}:${currDate.getMinutes()}:${currDate.getSeconds()}`;
    }
};