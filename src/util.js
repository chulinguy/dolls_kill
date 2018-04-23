import axios from 'axios';

export const spaceTrimmer = str => (str.replace(/ /g, ''));

export const rightAmountOfCommas = str => str.split(',').filter(substr => substr !== '').join(',');

export const retrieveData = (input, context) => {
  const url = `https://www.dollskill.com/codetest/api.php?ids=${input}&op=get_size_attributes`;

  axios.get(url).then(res => {
    console.log(res.data);
    if (context) context.setState({ jsonData: res.data });
  });
};

export const inputValidator = str => str.match(/^[0-9,]+$/) != null;

