const createFetch = (onSuccess, onError) => {
  return fetch(
    'https://22.javascript.pages.academy/kekstagram/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    }
  ).then(
      (response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Ошибка. Проверьте параметры метода fetch');
      }
    ).then(
      (data) => {
        onSuccess(data);
      }
    ).catch(
      () => {
        onError();
      }
    );
};

export { createFetch };
