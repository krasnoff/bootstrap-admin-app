import { renderHook, act } from '@testing-library/react-hooks'
import { useReturnDateDiff } from './useReturnDateDiff'

test('test return date diff hook', () => {
    let checkDate = new Date();  
    checkDate = new Date((new Date()).getTime())
    const { result, rerender } = renderHook(({ initialValue }) => useReturnDateDiff(initialValue), {
        initialProps: { initialValue: checkDate }
    });
    expect(result.current).toBe('');

    // year
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear() - 1, checkDate.getMonth(), checkDate.getDate(), checkDate.getHours(), checkDate.getMinutes(), checkDate.getSeconds(), 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('1y');

    // month
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth() - 1, checkDate.getDate(), checkDate.getHours(), checkDate.getMinutes(), checkDate.getSeconds(), 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('30d');

    // day
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate() - 1, checkDate.getHours(), checkDate.getMinutes(), checkDate.getSeconds(), 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('1d');

    // hour
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate(), checkDate.getHours() - 1, checkDate.getMinutes(), checkDate.getSeconds(), 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('1h');

    // minutes
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate(), checkDate.getHours(), checkDate.getMinutes() - 1, checkDate.getSeconds(), 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('1min');

    // seconds
    checkDate = new Date();
    checkDate = new Date(checkDate.getFullYear(), checkDate.getMonth(), checkDate.getDate(), checkDate.getHours(), checkDate.getMinutes(), checkDate.getSeconds() - 1, 0);
    rerender({ initialValue: checkDate })
    expect(result.current).toBe('1s');
})