package br.com.sptech.fitwish.constants.pages.themes;

public enum IndexEnum {
    LIGHT("#1F3B4D"), DARK("azure");

    private String colorPallete;

    public String getColorPallete() {
        return colorPallete;
    }

    private IndexEnum(String colorPallete) {
        this.colorPallete = colorPallete;
    }

}