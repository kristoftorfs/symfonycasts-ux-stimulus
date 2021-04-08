import { Controller } from 'stimulus';
import { useClickOutside, useDebounce } from "stimulus-use";

export default class extends Controller {
    static targets = ['result'];
    static debounces = ['search'];
    static values = {
        url: String
    }

    connect() {
        useClickOutside(this);
        useDebounce(this);
    }

    onSearchInput(event) {
        this.search(event.currentTarget.value);
    }

    async search(query) {
        const params = new URLSearchParams({
            q: query,
            preview: 1,
        });

        const response = await fetch(`${this.urlValue}?${params.toString()}`);
        this.resultTarget.innerHTML = await response.text();
    }

    clickOutside(event) {
        this.resultTarget.innerHTML = '';
    }
}