class Board < ActiveRecord::Base
  has_many :board_panels, dependent: :destroy
  has_many :panels, through: :board_panels
end
