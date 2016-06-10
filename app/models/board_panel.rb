class BoardPanel < ActiveRecord::Base
  belongs_to :board
  belongs_to :panel
end
