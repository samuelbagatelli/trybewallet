export const loginAction = (email) => ({ type: 'LOGIN_ACTION', email });

const currencyRequest = () => ({ type: 'REQUEST_CURRENCY' });
const currencyReceive = (currencies) => ({ type: 'RECEIVE_CURRENCY', currencies });

export const fetchCurrencies = () => async (dispatch) => {
  dispatch(currencyRequest());
  try {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    const { USDT, ...treatedData } = data;
    const currencies = Object.keys(treatedData);
    dispatch(currencyReceive(currencies));
  } catch (error) {
    // throw new Error(error);
  }
};

export const expensesAction = (expenses) => ({ type: 'EXPENSES_ACTION', expenses });

export const deleteExpenseAction = (expenses) => ({ type: 'DELETE_EXPENSE', expenses });
