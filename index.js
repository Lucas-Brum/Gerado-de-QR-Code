
function GeraQRCode()		
        {

                var conteudo = document.getElementById('conteudoQRCode').value;
                var GoogleCharts = 'https://chart.googleapis.com/chart?chs=500x500&cht=qr&chl=';
                var imagemQRCode = GoogleCharts + conteudo;

                if (conteudo == 'Conteudo do QR Code' || conteudo == '') {
                        console.log('invalido')
                        alert("Digite sua URL na caixa de texto");
                      } 
                else {  
                        console.log('valido')
                        document.getElementById('imageQRCode').src = imagemQRCode;
                      }

                
        
        }