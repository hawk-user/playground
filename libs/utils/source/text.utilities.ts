export class TextUtilies {

    public static removeAccents (text: string): string {
        return text
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, '');
    }

    public static toDashed (text: string): string {
        return text
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    public static slugify (text: string): string {
        const clean = this.removeAccents(text.toLocaleLowerCase());
        const dashed = this.toDashed(clean);
        return `$/${dashed}`;

    }

}