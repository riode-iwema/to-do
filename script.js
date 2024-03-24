// Web Component JS 
class MainContainer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <main>
                <section class="section1">
                    <div class="part1">
                        <i class="fa  fa-arrow-left"></i>
                        Back to lists
                    </div>
                    <div class="part2">
                        <div>TODAY</div>
                        <div><button>+</button></div>
                    </div>

                    <div class="part3">
                        <div class="bar"></div>
                        <div>33% complete</div>
                    </div>
                    <div class="part4">
                        <task-item label="Meditation" checked></task-item>
                        <task-item label="Pick up Anna" checked></task-item>
                        <task-item label="Set up meeting with Jay" checked></task-item>
                        <task-item label="Finish Daily UI" checked></task-item>
                        <task-item label="Second Edits on article" checked></task-item>
                        <task-item label="Email Chris" checked></task-item>
                    </div>
                    <div class="part5">
                        <div class="line"></div>
                        <div>Pull from recurring lists</div>
                    </div>
                    <div class="list1">
                        <list-item class="yellow">Daily</list-item>
                        <list-item class="green">Weekly</list-item>
                    </div>
                    <div class="list2">
                        <list-item class="pink">Monthly</list-item>
                        <list-item class="blue">Occasional</list-item>
                    </div>
                </section>
                <section class="section2"></section>
            </main>
        `;
    }
}

class TaskItem extends HTMLElement {
    connectedCallback() {
        const label = this.getAttribute('label');
        const checked = this.hasAttribute('checked');

        this.innerHTML = `
            <label>
                <input type="checkbox" ${checked ? 'checked' : ''} class="checkbox">
                <p>${label}</p>
            </label>
        `;
    }
}

class ListItem extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="${this.className}">${this.textContent}</div>
        `;
    }
}

customElements.define('main-container', MainContainer);
customElements.define('task-item', TaskItem);
customElements.define('list-item', ListItem);