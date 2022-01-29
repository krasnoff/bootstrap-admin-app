import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAsyncAutoComplete } from './useAsyncAutoComplete'

// jest.setTimeout(30000);

test('test return autocomplete results', async () => {
    const { result, waitForNextUpdate } = renderHook(({ }) => useAsyncAutoComplete(), {
        initialProps: {}
    });

    act(() => {
        result.current.sendAutoComplete('apple');
    })

    await waitForNextUpdate({timeout: false})

    expect(result.current.data).not.toBeNull();
    expect(result.current.data?.ResultSet.Result.length).toBeGreaterThan(0);
})
