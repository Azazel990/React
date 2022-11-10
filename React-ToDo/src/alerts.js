import { MySwal } from "./App"
function myBasic(t){
  MySwal.fire({
      title : t
  })
}

function mySuccessBasic(t){
  MySwal.fire({
    icon : 'success',
    title : t
  })
}

function mySuccess(t,p){
  MySwal.fire({
    icon : 'success',
    title : t,
    text : p
  })
}

function myInfoBasic(t){
  MySwal.fire({
    icon : 'info',
    title : t
  })
}

function myInfo(t,p){
  MySwal.fire({
    icon : 'info',
    title : t,
    text : p
  })
}

function myErrorBasic(t){
  MySwal.fire({
    icon : 'error',
    title : t
  })
}
function myError(t,p){
  MySwal.fire({
    icon : 'error',
    title : t,
    text : p
  })
}

export async function myChoice(t,p){
  return new Promise(function(resolve,reject){
        MySwal.fire({
          icon : 'question',
          title : t,
          text : p,
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText : 'Yes'
        }).then((result) => {
            if(result.isConfirmed) resolve(1);
            else if (result.dismiss === MySwal.DismissReason.cancel){
              reject(0)
            }
        })
  })
}

function myImgae(t,p){
  MySwal.fire({
    title: t,
  text: p,
  imageUrl: 'https://unsplash.it/400/200',
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: 'Custom image',
  })
}

function myTimer(t,p,i){
  MySwal.fire({
    icon : i,
    title : t,
    text : p,
    timer : 2000,
    showConfirmButton : false
  })
}