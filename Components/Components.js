export class Component{
    buttons(itemJson){

    }
    spanInputs(itemJson){
        return `
                    <span>
                        <label><b>${itemJson.title}</b></label>
                        <input type="${itemJson.type}" 
                            ${itemJson.min ? `min="${itemJson.min}"`:""}
                            ${itemJson.id ? `id="${itemJson.id}"`:""}
                            ${itemJson.class ? `class="${itemJson.class}"`:""}     
                            ${itemJson.enabled ? `enabled="${itemJson.enabled}"`:""}     
                            >
                    </span>
                `
    }
}