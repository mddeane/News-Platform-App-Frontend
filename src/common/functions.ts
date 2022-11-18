export class Functions {
    public static changeWidthOfElement(el: HTMLElement): number {
        let rects = el.getClientRects();
        console.log(rects[0].width);
        return (rects[0].width + 100);
    }
}