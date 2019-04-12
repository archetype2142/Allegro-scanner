class BarcodesController < ApplicationController
  before_action :set_barcode, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!

  # GET /barcodes
  # GET /barcodes.json
  def index
    email = request.headers["uid"]
    @barcodes = User.where(email: email).first.barcodes
  end

  # GET /barcodes/1
  # GET /barcodes/1.json
  def show

  end

  # GET /barcodes/new
  def new
    @barcode = Barcode.new
  end

  # GET /barcodes/1/edit
  def edit
  end

  # POST /barcodes
  # POST /barcodes.json
  def create
    @barcode = Barcode.new(barcode_params)
    email = request.headers["uid"]

    @barcode.update_attributes(user: User.where(email: email).first)
    respond_to do |format|
      if @barcode.save
        format.html { redirect_to @barcode, notice: 'Barcode was successfully created.' }
        format.json { render :show, status: :created, location: @barcode }
      else
        format.html { render :new }
        format.json { render json: @barcode.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /barcodes/1
  # PATCH/PUT /barcodes/1.json
  def update
    respond_to do |format|
      if @barcode.update(barcode_params)
        format.html { redirect_to @barcode, notice: 'Barcode was successfully updated.' }
        format.json { render :show, status: :ok, location: @barcode }
      else
        format.html { render :edit }
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

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_barcode
      @barcode = Barcode.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def barcode_params
      params.permit(:code)
    end
end
