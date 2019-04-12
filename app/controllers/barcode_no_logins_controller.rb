class BarcodeNoLoginsController < ApplicationController
  before_action :set_barcode_no_login, only: [:show, :edit, :update, :destroy]

  # POST /barcode_no_logins
  # POST /barcode_no_logins.json
  def create
    @barcode_no_login = BarcodeNoLogin.new(barcode_no_login_params)

    respond_to do |format|
      if @barcode_no_login.save
        format.html { redirect_to @barcode_no_login, notice: 'Barcode no login was successfully created.' }
        format.json { render :show, status: :created, location: @barcode_no_login }
      else
        format.html { render :new }
        format.json { render json: @barcode_no_login.errors, status: :unprocessable_entity }
      end
    end
  end

  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barcode_no_login
      @barcode_no_login = BarcodeNoLogin.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def barcode_no_login_params
      params.permit(:code)
    end
end
