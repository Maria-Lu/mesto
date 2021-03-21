export default class Section {
  constructor(renderer, containerSelector) {
    this._containerSelector = containerSelector;
    this._container = document.querySelector(this._containerSelector);
    this._renderer = renderer;
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(dataArray) {
    this.clear();
    dataArray.reverse().forEach((data) => {
    this._renderer(data);
  });
  }

  setItem(element) {
    this._container.prepend(element);
  }

}
