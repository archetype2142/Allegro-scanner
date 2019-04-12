require 'test_helper'

class BarcodeNoLoginsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @barcode_no_login = barcode_no_logins(:one)
  end

  test "should get index" do
    get barcode_no_logins_url
    assert_response :success
  end

  test "should get new" do
    get new_barcode_no_login_url
    assert_response :success
  end

  test "should create barcode_no_login" do
    assert_difference('BarcodeNoLogin.count') do
      post barcode_no_logins_url, params: { barcode_no_login: { code: @barcode_no_login.code } }
    end

    assert_redirected_to barcode_no_login_url(BarcodeNoLogin.last)
  end

  test "should show barcode_no_login" do
    get barcode_no_login_url(@barcode_no_login)
    assert_response :success
  end

  test "should get edit" do
    get edit_barcode_no_login_url(@barcode_no_login)
    assert_response :success
  end

  test "should update barcode_no_login" do
    patch barcode_no_login_url(@barcode_no_login), params: { barcode_no_login: { code: @barcode_no_login.code } }
    assert_redirected_to barcode_no_login_url(@barcode_no_login)
  end

  test "should destroy barcode_no_login" do
    assert_difference('BarcodeNoLogin.count', -1) do
      delete barcode_no_login_url(@barcode_no_login)
    end

    assert_redirected_to barcode_no_logins_url
  end
end
