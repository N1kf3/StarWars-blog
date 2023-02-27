const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			swFav:[],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getInfoSw: async (resource)=>{
        
				try{
					const response = await fetch(resource);
					if (response.ok == false) {
						const error = response.json();
						throw new Error(error.message);
					}
					const body = await response.json();   
					return body;        
				}
				catch(error){
					console.log(error);
				}  
			},
			agregarAFav:(newFav , vista, uid)=>{
				let flag = false;
				const store = getStore();
				for (let i =0; i<store.swFav.length; i++){
					if (store.swFav[i].name == newFav)
					flag = true;
				}
				if (!flag) setStore({swFav:[...store.swFav,{name: newFav,vista: vista, id:uid}]});		
			},

			eliminarEnFav:(prev)=>{
				setStore({swFav:[...prev]})
			},

			filtrarFav:(id)=>{
				const store = getStore();
				getActions().eliminarEnFav(store.swFav.filter((item,index)=>{
					if (index != id){            
						return item
					}
				}));
			}
		}
	};
};

export default getState;
