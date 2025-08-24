/*
*************************************************
  When creating File resume for download
  (only available in development mode)
    1. print-> format paper to letter/portrait
    2. save as PDF
*************************************************
*/

class IsDownloadPdfState {
  isDownloadMode = $state(false);
}

export const toPdf = new IsDownloadPdfState();
