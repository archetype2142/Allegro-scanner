class BarcodesController < ApplicationController
  before_action :set_barcode, only: [:destroy]
  # before_action :authenticate_user!

  require "uri"
  require "net/http"

  def index
    email = request.headers["uid"]
    @barcodes = Barcode.where(user: User.where(email: email).first).last
    json_response(@barcodes)
  end

  def new
    @barcode = Barcode.new
  end

  def edit
  end

  def create
    @barcode = Barcode.new(barcode_params)
    email = request.headers["uid"]
    @barcode.update_attributes(user: User.where(email: email).first) if email
    # get_result(params["code"], get_tokens["access-token"], get_tokens["jti"])

    respond_to do |format|
      if @barcode.save
        FindResultsJob.perform_later @barcode
        format.json { json_response(@barcode) }
      else
        format.json { render json: @barcode.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /barcodes/1
  # DELETE /barcodes/1.json
  def destroy
    @barcode.destroy
    respond_to do |format|
      format.html { redirect_to barcodes_url, notice: 'Barcode was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def get_barcode
    json_response(params[:upc])
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barcode
      @barcode = Barcode.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def barcode_params
      params.permit(:code, :upc)
    end
end
