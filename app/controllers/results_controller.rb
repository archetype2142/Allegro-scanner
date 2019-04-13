class ResultsController < ApplicationController
  before_action :set_result, only: [:show]

  def index
    @results = Barcode.find(params[:barcode_id]).results
    json_response(@results)
  end

  def show
    json_response(Result.find(params[:id]))
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_result
      @result = Result.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def result_params
      params.permit(:name, :description, :image, :price)
    end
end
