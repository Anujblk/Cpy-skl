const Nav = ()=>{

    return(
        <nav style={{
               
                display:"flex",
                background:"White",
                justifyContent:"space-between",
                padding:'0 48px',
                gap:10,
                boxShadow:'0 8px 8px 0 rgba(0,0,0,0.1)'
            }}>
            <div  style={{
                display:"flex",
                gap:10,
                alignItems:'center'
            }}>
            <img  

                src="./images/logo.png"
                width={60}
/>
<h1  >AntiKe School</h1>
            
   </div>         
<ul style={{
    listStyle:'none',
    display:'flex',
    alignItems:'center'
    
}} >
                <li  ><a href="#" style={{textDecoration:'none',fontSize:17,color:'#323232' ,padding:'18px'}}>Home</a>
                    
                </li>

                <li  ><a href="#" style={{textDecoration:'none',fontSize:17,color:'#323232',padding:'18px'}}>Teachers</a>
                    
                </li>
                <li  ><a href="#" style={{textDecoration:'none',fontSize:17,color:'#323232',padding:'18px'}}>Holidays</a>
                    
                </li>
                <li  ><a href="#" style={{textDecoration:'none',fontSize:17,color:'white',backgroundColor:'purple',borderRadius:4,padding:'18px'}}>Contact Us</a>
                    
                </li>
                
                
            </ul>
            
            
            
           
        </nav>
    )
}

export default Nav