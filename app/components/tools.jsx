
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

export const addHtmlCls = page => {
  const html = document.getElementsByTagName('html')[0];
  page = page === "/" ? page = "html-landing" : `html-${page.replace("/", "").split("#")[0]}`;
  if (html.classList.value.split('html').length) html.classList.remove(`html${html.classList.value.split('html')[1]}`);
  html.classList.add(page);
}

export const pageLoadHtmlClsChk = page => {
  const html = document.getElementsByTagName('html')[0];
  if (!html.classList.length) {
    addHtmlCls(page);
  } else {
    if (html.classList.value.split('html').indexOf(`-${page}`) < 0) addHtmlCls(page);;
  }
}
