import axios from 'axios';

export const retrieveData = (input, context) => {
  const url = `https://www.dollskill.com/codetest/api.php?ids=${input}&op=get_size_attributes`;

  axios.get(url).then(data => {
    console.log(data);
    context.setState({ results: data });
  });
};
