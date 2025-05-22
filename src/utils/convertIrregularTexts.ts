export const ConvertIrregularTexts = ( text : string)  => {
  return text
    .replace(/ي/g, "ی")
    .replace(/ك/g, "ک");
}