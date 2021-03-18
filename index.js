
function GeraQRCode()		
        {

                var regex = new RegExp("^((http(s?)://(www.)?[a-z]+.com/)|(magnet:?xt=urn:btih:))")
                var conteudo = document.getElementById('conteudoQRCode').value;
                var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
                var imagemQRCode = GoogleCharts + conteudo;

                if (regex.test(conteudo)) {
                        document.getElementById('imageQRCode').src = imagemQRCode;
                        
                } 
                else {  
                        alert("Digite sua URL na caixa de texto");
                }

                
        
        }