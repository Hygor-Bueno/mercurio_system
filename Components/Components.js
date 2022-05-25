export class Component {
    buttons(itemJson) {
        return `
        <button ${itemJson.id ? `id=${itemJson.id}` : ""} ${itemJson.type ? `type=${itemJson.type}` : ""} ${itemJson.title ? `title=${itemJson.title}` : ""}>
            ${itemJson.description ? itemJson.description : ""}
        </button>
        `
    }
    spanInputs(itemJson) {
        return `
                    <span>
                        ${itemJson.title ? `<label><b>${itemJson.title}</b></label>` : ""}
                        <input type="${itemJson.type}" 
                            ${itemJson.min ? `min="${itemJson.min}"` : ""}
                            ${itemJson.max ? `maxlength="${itemJson.max}"` : ""}
                            ${itemJson.id ? `id="${itemJson.id}"` : ""}
                            ${itemJson.class ? `class="${itemJson.class}"` : ""}     
                            ${itemJson.value ? `value="${itemJson.value}"` : ""}     
                            ${itemJson.disabled ? `disabled="${itemJson.disabled}"` : ""}     
                            >
                    </span>
                `
    }
}