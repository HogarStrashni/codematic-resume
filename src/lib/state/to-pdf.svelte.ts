/*
*************************************************
	When creating File resume for download
		1. change isDownloadMode = $state(true)
		2. print-> format paper to letter/portrait
		3. save as PDF
*************************************************
*/

class IsDownloadPdfState {
	isDownloadMode = $state(false);
}

export const toPdf = new IsDownloadPdfState();
