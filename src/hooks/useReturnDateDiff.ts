import { useEffect, useState } from "react";

export function useReturnDateDiff(dateObj: Date) {
    const [formattedDate, setFormattedDate] = useState('');
  
    useEffect(() => {
        const timeDiff: number = new Date().getTime() - dateObj.getTime();

        function parseDateDiff() {
            if ((new Date(timeDiff).getFullYear() - 1970) > 0) {
                setFormattedDate((new Date(timeDiff).getFullYear() - 1970).toString() + 'y');
            } else if ((new Date(timeDiff).getMonth() + 1) > 1) {
                setFormattedDate((new Date(timeDiff).getMonth() + 1).toString() + 'm');
            } else if ((new Date(timeDiff).getDate()) > 1) {
                setFormattedDate((new Date(timeDiff).getDate()).toString() + 'd');
            } else if ((new Date(timeDiff).getHours()) > 0) {
                setFormattedDate((new Date(timeDiff).getHours()).toString() + 'h');
            } else if ((new Date(timeDiff).getMinutes()) > 0) {
                setFormattedDate((new Date(timeDiff).getMinutes()).toString() + 'min');
            } else if ((new Date(timeDiff).getSeconds()) > 0) {
                setFormattedDate((new Date(timeDiff).getSeconds()).toString() + 's');
            }
        }
        
        parseDateDiff();
        return () => {
          
        };
    });
  
    return formattedDate;
}