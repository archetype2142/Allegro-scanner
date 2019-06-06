class BarcodeNoLoginsController < ApplicationController
  # POST /barcode_no_logins
  # POST /barcode_no_logins.json
  def create
    @barcode_no_login = BarcodeNoLogin.new(barcode_no_login_params)

    respond_to do |format|
      if @barcode_no_login.save
        FindResultsJob.perform_later @barcode_no_login

        format.html { redirect_to @barcode_no_login, notice: 'Barcode no login was successfully created.' }
        format.json { json_response(@barcode_no_login) }
      else
        format.html { render :new }
        format.json { render json: @barcode_no_login.errors, status: :unprocessable_entity }
      end
    end
  end

  
  private  
    def barcode_no_login_params
      params.permit(:code)
    end
end
