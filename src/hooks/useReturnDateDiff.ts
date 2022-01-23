import { useEffect, useState } from "react";

export function useReturnDateDiff(dateObj: Date) {
    const [formattedDate, setFormattedDate] = useState('');
  
    useEffect(() => {
        let timeDiff: number = (new Date()).getTime() - dateObj.getTime();

        if (Math.abs(timeDiff) < 1000) {
            timeDiff = 0;
        }

        function parseDateDiff() {
            if ((new Date(timeDiff).getUTCFullYear() - 1970) > 0) {
                setFormattedDate((new Date(timeDiff).getUTCFullYear() - 1970).toString() + 'y');
            } else if ((new Date(timeDiff).getUTCMonth() + 1) > 1) {
                setFormattedDate((new Date(timeDiff).getUTCMonth()).toString() + 'm');
            } else if ((new Date(timeDiff).getUTCDate()) > 1) {
                setFormattedDate((new Date(timeDiff).getUTCDate() - 1).toString() + 'd');
            } else if ((new Date(timeDiff).getUTCHours()) > 0) {
                setFormattedDate((new Date(timeDiff).getUTCHours()).toString() + 'h');
            } else if ((new Date(timeDiff).getUTCMinutes()) > 0) {
                setFormattedDate((new Date(timeDiff).getUTCMinutes()).toString() + 'min');
            } else if ((new Date(timeDiff).getUTCSeconds()) > 0) {
                setFormattedDate((new Date(timeDiff).getUTCSeconds()).toString() + 's');
            }
        }
        
        parseDateDiff();
        return () => {
          
        };
    });
  
    return formattedDate;
}