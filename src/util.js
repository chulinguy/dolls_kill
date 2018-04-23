import axios from 'axios';
// import testData from './data.json';

const standardizeJsonData = jsonData => {
  const output = [];
  Object.keys(jsonData).forEach(prod_id => {
    Object.keys(jsonData[prod_id]).forEach(size_id => {
      const itemObj = {
        prod_id,
        size: jsonData[prod_id][size_id].size_text.toLowerCase(),
        quantity: jsonData[prod_id][size_id].quantity,
      };
      output.push(itemObj);
    });
  });
  return output;
};

export const spaceTrimmer = str => (str.replace(/ /g, ''));

export const rightAmountOfCommas = str => str.split(',').filter(substr => substr !== '').join(',');

export const retrieveData = (input, context) => {
  const url = `https://www.dollskill.com/codetest/api.php?ids=${input}&op=get_size_attributes`;

  axios.get(url).then(res => {
    // console.log(res.data);
    if (context) {
      const emptyStocks = [];
      const availStocks = [];
      const goodJsonData = standardizeJsonData(res.data);
      // const goodJsonData = standardizeJsonData(testData);
      // console.log('good data', goodJsonData);
      goodJsonData.forEach(itemObj => {
        if (itemObj.quantity) availStocks.push(itemObj);
        else emptyStocks.push(itemObj);
      });
      const availStocksAscend = availStocks.slice().sort((a, b) => (a.quantity - b.quantity));
      const availStocksDescend = availStocksAscend.slice().reverse();
      context.setState({
        emptyStocks,
        availStocksAscend,
        availStocksDescend,
      });
    }
  });
};

export const inputValidator = str => str.match(/^[0-9,]+$/) != null;

