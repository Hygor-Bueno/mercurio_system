export class Component{
    buttons(itemJson){

    }
    spanInputs(itemJson){
        return `
                    <span>
                        ${itemJson.title? `<label><b>${itemJson.title}</b></label>`:""}
                        <input type="${itemJson.type}" 
                            ${itemJson.min ? `min="${itemJson.min}"`:""}
                            ${itemJson.max ? `maxlength="${itemJson.max}"`:""}
                            ${itemJson.id ? `id="${itemJson.id}"`:""}
                            ${itemJson.class ? `class="${itemJson.class}"`:""}     
                            ${itemJson.value ? `value="${itemJson.value}"`:""}     
                            ${itemJson.enabled ? `enabled="${itemJson.enabled}"`:""}     
                            >
                    </span>
                `
    }
}