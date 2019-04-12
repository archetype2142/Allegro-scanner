require "application_system_test_case"

class BarcodesTest < ApplicationSystemTestCase
  setup do
    @barcode = barcodes(:one)
  end

  test "visiting the index" do
    visit barcodes_url
    assert_selector "h1", text: "Barcodes"
  end

  test "creating a Barcode" do
    visit barcodes_url
    click_on "New Barcode"

    fill_in "Code", with: @barcode.code
    click_on "Create Barcode"

    assert_text "Barcode was successfully created"
    click_on "Back"
  end

  test "updating a Barcode" do
    visit barcodes_url
    click_on "Edit", match: :first

    fill_in "Code", with: @barcode.code
    click_on "Update Barcode"

    assert_text "Barcode was successfully updated"
    click_on "Back"
  end

  test "destroying a Barcode" do
    visit barcodes_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Barcode was successfully destroyed"
  end
end
