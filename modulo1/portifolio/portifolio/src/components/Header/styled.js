import styled from "styled-components";


export const HeaderContainer = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        background-image:url("https://tribalsystems.uk/public/images/4BDtj/masthead-desk-and-laptops.jpg");
        background-size:cover ;
        width: 100%;
        color:#efe8f1 ;
        font-family:Arial;
        font-weight:lighter;
        text-align:center;

        @media (min-width: 1000px) {
            /* display: flex;
            justify-content: center;
            align-items: center; */
            flex-direction: row;
            height: auto;
            width: 100%;
        }
        
        .button-container{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin: 10px;

        a{
            display: flex;
            justify-content: center;
            align-items: center;
            text-decoration:none;
            color:#0e0e0e;
            width: 150px;
            height: 40px;
            padding: 15px;
            box-sizing: border-box;
            background-color: #fff ;
            margin:0 0 10px;
            border-radius:5px;
            font-size: 23px;
        
            @media (min-width: 1000px) {
                margin: 50px
            }



            transition: all 0.3s ease;
                &:hover{
                    background-color: #eeeeee ;
            }
        }

        }

        img{
        
            border-radius:50%;
            width: 200px;
            height: 200px;
            animation: go-back 1s;

            @media (min-width: 1000px) {
                
                width: 290px;
                height: 290px;
                /* margin: 50px */
            
            }
    
         @keyframes go-back {
            from {
            transform: translateX(100px);
            }
                to {
                    transform: translateX(0);
            }

        
        
    } 


    }

    h1 {
        font-size:20px;
        animation: go-back 1s;
        font-size:25px;

        @media (min-width: 1000px) {
             font-size:35px;
             padding:30px;
             margin: 30px;

        }
        
        @keyframes go-back {
     from {
        transform: translateX(100px);
        }
         to {
            transform: translateX(0);
        }

       
        
    }



`
