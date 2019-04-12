require "application_system_test_case"

class BarcodeNoLoginsTest < ApplicationSystemTestCase
  setup do
    @barcode_no_login = barcode_no_logins(:one)
  end

  test "visiting the index" do
    visit barcode_no_logins_url
    assert_selector "h1", text: "Barcode No Logins"
  end

  test "creating a Barcode no login" do
    visit barcode_no_logins_url
    click_on "New Barcode No Login"

    fill_in "Code", with: @barcode_no_login.code
    click_on "Create Barcode no login"

    assert_text "Barcode no login was successfully created"
    click_on "Back"
  end

  test "updating a Barcode no login" do
    visit barcode_no_logins_url
    click_on "Edit", match: :first

    fill_in "Code", with: @barcode_no_login.code
    click_on "Update Barcode no login"

    assert_text "Barcode no login was successfully updated"
    click_on "Back"
  end

  test "destroying a Barcode no login" do
    visit barcode_no_logins_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Barcode no login was successfully destroyed"
  end
end
