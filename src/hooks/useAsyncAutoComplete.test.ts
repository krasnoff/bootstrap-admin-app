import { waitFor } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useAsyncAutoComplete } from './useAsyncAutoComplete'

test('test return autocomplete results', async () => {
    const { result, waitForNextUpdate } = renderHook(({ initialValue }) => useAsyncAutoComplete(initialValue), {
        initialProps: { initialValue: 'apple' }
    });

    await waitForNextUpdate({timeout: false})

    // console.log(result.current)
    expect(result.current?.ResultSet.Query).not.toBeNull();
    expect(result.current?.ResultSet.Result.length).toBeGreaterThan(0);
})
