### Input Uni <=> Zawgyi Converter - Convert Unicode and Zawgyi for Input Text Types


#### Installation 

Download [extension](https://github.com/kaungmyatlwin/input-unizg-converter/blob/master/dist/input-unizg-converter.crx).

Go to `chrome://extensions`.

Drag and drop file on that tab.

#### Usage

Select text which is in textbox.

Use `Ctrl + \` to convert it from Unicode and Zawgyi respectively.

#### Known Issues

Sometimes the extension won't work on certain websites which doesn't use `<input>` types for text inputs.

For example: Go to Facebook and try to convert text in Status Box. The font won't change due to Facebook's usage of `<span>` element for text inputs.

Workaround is to create `textNode` and change the `textContent` of the active element. But most of the type Facebook's React Engine reverts back to original text and even if the text is converted, only the origin text is posted not the converted one.

Note that workaround isn't included in this release, due to it raising more bugs.


#### Credits

Uses [knayi-myscript](https://github.com/greenlikeorange/knayi-myscript) library for detection and conversion.