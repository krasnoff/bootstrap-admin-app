import { renderHook, act } from '@testing-library/react-hooks';
import { MandatoryTypes } from '../Enums/MandatoryTypes';
import { useFormUtilities } from './useFormUtilities';

test('test form validation function - required field true', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.required}, 'ssss')
    })

    expect(result.current.notValidresult).toBe(false);
})

test('test form validation function - required field false 1', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.required}, '')
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - required field false 2', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.required}, undefined)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - regex 1', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.Regex}, undefined)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - regex 2', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.Regex, mandatoryArg: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)}, undefined)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - regex 3', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.Regex, mandatoryArg: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)}, 'krasnoff.kobi@gmail.com')
    })

    expect(result.current.notValidresult).toBe(false);
})

test('test form validation function - regex 4', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.Regex, mandatoryArg: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)}, 'kobikr@y-i.co.il')
    })

    expect(result.current.notValidresult).toBe(false);
})

test('test form validation function - range maximum 1', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMaximum, mandatoryArg: 10}, 20)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - range maximum 2', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMaximum, mandatoryArg: 10}, 5)
    })

    expect(result.current.notValidresult).toBe(false);
})

test('test form validation function - range maximum 3', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMaximum, mandatoryArg: 10}, '')
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - range maximum 4', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMaximum, mandatoryArg: undefined}, 5)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - range minimum 1', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMinimum, mandatoryArg: 10}, 5)
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - range minimum 2', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMinimum, mandatoryArg: 10}, 20)
    })

    expect(result.current.notValidresult).toBe(false);
})

test('test form validation function - range minimum 3', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMinimum, mandatoryArg: 10}, '')
    })

    expect(result.current.notValidresult).toBe(true);
})

test('test form validation function - range minimum 4', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useFormUtilities(), {
        initialProps: {}
    });

    act(() => {
        result.current.validateElement({mandatoryType: MandatoryTypes.rangeMinimum, mandatoryArg: undefined}, 5)
    })

    expect(result.current.notValidresult).toBe(true);
})