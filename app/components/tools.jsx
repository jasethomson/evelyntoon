
export const getData = props => {
  fetch(`http://localhost:5000/${props.endpoint}`)
    .then(res => res.json())
    .then(data => {
      props.setData(prevState => ({
        ...prevState,
        [props.endpoint]: data
      }));
    })
}
