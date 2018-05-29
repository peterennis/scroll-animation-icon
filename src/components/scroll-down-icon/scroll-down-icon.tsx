import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'scroll-down-icon',
  styleUrl: 'scroll-down-icon.css',
  shadow: true
})
export class ScrollDownIcon {

  @Element()
  private element: HTMLElement;

  @Prop()
  color: string;

  protected componentWillLoad(): void {
    if (this.color) {
      this.element.style.setProperty("--main-color", this.color);
    }
  }

  render() {
    return (
      <div class='icon-scroll-container'>
        <div class='icon-scroll'></div>
      </div>
    );
  }
}